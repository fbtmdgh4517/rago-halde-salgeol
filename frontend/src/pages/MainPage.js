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
            <div className="grid grid-cols-2 gap-1 max-w-5xl mx-auto">
                <NewsListPreview />
                <PostListPreview />
            </div>
        </>
    );
};

export default MainPage;
