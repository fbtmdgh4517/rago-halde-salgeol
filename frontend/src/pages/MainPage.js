import CoinCalculator from '../components/CoinCalculator';
import CoinPriceUpTopRank from '../components/CoinPriceUpTopRank';
import ExchangeLinks from '../components/ExchangeLinks';
import InterestCoin from '../components/InterestCoin';
import NewsListPreview from '../components/NewsListPreview';
import PostListPreview from '../components/PostListPreview';
import HeaderContainer from '../containers/common/HeaderContainer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <ExchangeLinks />
            <InterestCoin />
            <CoinPriceUpTopRank />
            <NewsListPreview />
            <PostListPreview />
        </>
    );
};

export default MainPage;
