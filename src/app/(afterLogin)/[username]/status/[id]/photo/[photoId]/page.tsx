import Home from '@/app/(afterLogin)/home/page';

type Props = {
    params: { username: string; id: string; photoId: string };
};
export default function Photo({ params }: Props) {
    params.username;
    params.id;
    params.photoId;
    return <Home />;
}