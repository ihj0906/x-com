import BackButton from '@/app/(afterLogin)/_component/BackButton';
import SearchForm from '@/app/(afterLogin)/_component/SearchForm';
import style from './search.module.css';
import Tab from '@/app/(afterLogin)/search/_component/Tab';
import SearchResult from './_component/SearchResult';
import { Metadata } from 'next';

type Props = {
    searchParams: { q: string; f?: string; pf?: string };
};

// 동적으로 title, description 사용 시 generateMetadata
// 정적으로 title, description 사용 시 metadata
export async function generateMetadata({
    searchParams,
}: Props): Promise<Metadata> {
    return {
        title: `${searchParams.q} - 검색 / Z`,
        description: `${searchParams.q} - 검색 / Z`,
    };
}

export default function Search({ searchParams }: Props) {
    return (
        <main className={style.main}>
            <div className={style.searchTop}>
                <div className={style.searchZone}>
                    <div className={style.buttonZone}>
                        <BackButton />
                    </div>
                    <div className={style.formZone}>
                        <SearchForm q={searchParams.q} />
                    </div>
                </div>
                <Tab />
            </div>
            <div className={style.list}>
                <SearchResult searchParams={searchParams} />
            </div>
        </main>
    );
}
