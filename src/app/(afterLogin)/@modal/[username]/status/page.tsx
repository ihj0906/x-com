import style from './photoModal.module.css';
import Post from '@/app/(afterLogin)/_component/Post';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import BackButton from '@/app/(afterLogin)/_component/BackButton';

export default function Page() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>게시하기</h3>
            </div>
            <Post />
            <CommentForm />
            <div className={style.commentZone}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
