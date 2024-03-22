import { HttpResponse, http } from 'msw';

export const handlers = [
    http.post('/api/login', () => {
        // DB에서 데이터 가져오기
        return HttpResponse.json(
            {
                userId: 1,
                nickname: '치지직',
                id: 'chzzk',
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
        return new HttpResponse(null, {
            headers: {
                'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
            },
        });
    }),
];
