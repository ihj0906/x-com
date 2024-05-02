import { HttpResponse, http } from 'msw';

export const handlers = [
    http.post('/api/login', () => {
        console.log('로그인');
        // DB에서 데이터 가져오기
        return HttpResponse.json(
            {
                id: 'chzzk',
                nickname: '치지직',
                image: '/unnamed.png',
            },
            {
                headers: {
                    'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
                },
            }
        );
    }),
    http.post('/api/logout', () => {
        console.log('로그아웃');
        return new HttpResponse(null, {
            headers: {
                'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
            },
        });
    }),
    http.post('/api/users', async ({ request }) => {
        console.log('회원가입');
        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //     status: 403,
        // });
        return HttpResponse.text(JSON.stringify('ok'), {
            headers: {
                'Set-Cookie':
                    'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0',
            },
        });
    }),
];
