import Post from '@/app/(afterLogin)/_component/Post';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import style from './home.module.css';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';

export default function Home() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </TabProvider>
        </main>
    );
}

/**
 *  Provider 내부에서만 Context 를 사용할 수 있음
 */
