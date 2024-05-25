import Link from 'next/link';
import style from './trend.module.css';
import { Hashtag } from '@/model/Hashtag';

// TODO 인피니티 스크롤링 적용

type Prop = { trend: Hashtag };
export default function Trend({ trend }: Prop) {
    return (
        <Link
            href={`/search?q=${encodeURIComponent(trend.title)}`}
            className={style.container}
        >
            <div className={style.count}>실시간트렌드</div>
            <div className={style.title}>{trend.title}</div>
            <div className={style.count}>
                {trend.count.toLocaleString()} posts
            </div>
        </Link>
    );
}
