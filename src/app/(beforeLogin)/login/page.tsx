import Main from '@/app/(beforeLogin)/_component/Main';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import RedirectToLogin from '@/app/(beforeLogin)/login/_component/RedirectToLogin';

export default async function Login() {
    const session = await auth();

    if (session?.user) {
        redirect('/home');
        return null;
    }

    // 뒤로 가기 시의 차이점 존재
    // push localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
    // router.push('i/flow/login');
    // replace localhost:3001 -> localhost:3001/i/flow/login

    return (
        <>
            <RedirectToLogin />
            <Main />
        </>
    );
}
