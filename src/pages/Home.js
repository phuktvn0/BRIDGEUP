import React from 'react';
import './home.scss';
import HomeImage from '../assets/home.png';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-content">
                <img src={HomeImage} alt="Home Banner" className="home-image" />
                <p className="home-slogan">
                    Mỗi chiếc mũ tốt nghiệp không chỉ là kết thúc một hành trình học tập, mà còn là khởi đầu cho một hành trình vươn tới đỉnh cao. BRIDGEUP không chỉ kết nối kiến thức và kỹ năng, mà còn nâng tầm khát vọng – biến chiếc mũ học trò thành vương miện của sự thành công. Hãy bước lên cây cầu của tri thức, vươn mình làm chủ tương lai.
                </p>
            </div>
        </div>
    );
};

export default Home;