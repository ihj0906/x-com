import style from './chatRoom.module.css';
import cx from 'classnames';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import MessageFormat from './_component/MessageForm';
import { auth } from '@/auth';
import { QueryClient } from '@tanstack/react-query';
import { UserInfo } from './_component/UserInfo';
import { getUserServer } from '../../[username]/_lib/getUserServer';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
    params: { room: string };
};

export default async function ChatRoom({ params }: Props) {
    const session = await auth();
    const queryClient = new QueryClient();
    const ids = params.room.split('-').filter(v => v !== session?.user?.email);
    if (!ids[0]) {
        return null;
    }
    await queryClient.prefetchQuery({
        queryKey: ['users', ids[0]],
        queryFn: getUserServer,
    });

    const messages = [
        {
            messageId: 1,
            roomId: 123,
            id: 'chzzk',
            content: '안녕하세요',
            createdAt: new Date(),
        },
        {
            messageId: 2,
            roomId: 123,
            id: 'hero',
            content: '안녕히가세요',
            createdAt: new Date(),
        },
    ];

    return (
        <main className={style.main}>
            <UserInfo id={ids[0]} />
            <div className={style.list}>
                {messages.map(m => {
                    if (m.id === 'chzzk') {
                        return (
                            <div
                                key={m.messageId}
                                className={cx(style.message, style.myMessage)}
                            >
                                <div className={style.content}>{m.content}</div>
                                <div className={style.date}>
                                    {dayjs(m.createdAt).format(
                                        'YYYY년 MM월 DD일 A HH시 mm분'
                                    )}
                                </div>
                            </div>
                        );
                    }
                    return (
                        <div
                            key={m.messageId}
                            className={cx(style.message, style.yourMessage)}
                        >
                            <div className={style.content}>{m.content}</div>
                            <div className={style.date}>
                                {dayjs(m.createdAt).format(
                                    'YYYY년 MM월 DD일 A HH시 mm분'
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <MessageFormat />
        </main>
    );
}
