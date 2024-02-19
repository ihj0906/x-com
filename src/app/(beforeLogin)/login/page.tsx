'use client';

import { useRouter } from 'next/navigation';
import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import zLogo from '../../../../public/zlogo.png';

export default function Login() {
    const router = useRouter();
    // 뒤로 가기 시의 차이점 존재
    // push localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
    // router.push('i/flow/login');
    // replace localhost:3001 -> localhost:3001/i/flow/login
    router.replace('/i/flow/login');

    return (
        <>
            <div className={styles.left}>
                <Image src={zLogo} alt="logo" />
            </div>
            <div className={styles.right}>
                <h1>지금 일어나고 있는 일</h1>
                <h2>지금 가입하세요.</h2>
                <Link href="/i/flow/signup" className={styles.signup}>
                    계정 만들기
                </Link>
                <h3>이미 트위터에가입하셨나요?</h3>
                <Link href="/login" className={styles.login}>
                    로그인
                </Link>
            </div>
        </>
    );
}
