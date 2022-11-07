import CoinCalculator from '../components/CoinCalculator';
import CoinPriceUpTopRank from '../components/CoinPriceUpTopRank';
import InterestCoin from '../components/InterestCoin';
import NewsListPreview from '../components/NewsListPreview';
import PostListPreview from '../components/PostListPreview';
import HeaderContainer from '../containers/common/HeaderContainer';
//헤드 컨테이너에 메뉴 넣아야됨
//코인 계산 페이지를 따로 두는게?
const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <InterestCoin />
            <CoinPriceUpTopRank />
            <NewsListPreview />
        </>
    );
};

export default MainPage;
