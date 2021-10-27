import styled from 'styled-components';

export default function FloatingFooter() {
  return (
    <Aside>
      <Banner>
        <img src="/images/MemberBanner.png" alt="MemberBanner" />
      </Banner>
      <Links>
        <span>회사소개</span>
        <span>웹접근성</span>
        <span>고객센터</span>
        <span>개인정보와 약관</span>
        <span>Ad Choices</span>
        <span>광고</span>
        <span>비지니스 서비스</span>
        <span>LinkedIn 앱 다운로드</span>
        <span>더 보기</span>
      </Links>
      <Footer>
        <img src="/images/LinkedItLogo.png" alt="LinkedItLogo" />
        <span> LinkedIT with Wecode</span>
      </Footer>
    </Aside>
  );
}

const Aside = styled.div`
  width: 320px;
  text-align: center;
`;

const Banner = styled.div`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    width: 300px;
  }
`;

const Links = styled.div`
  padding: 20px;
  text-align: center;

  span {
    display: inline-block;
    padding: 0 10px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 14px;
  }
`;

const Footer = styled.div`
  padding-bottom: 20px;
  text-align: center;

  img {
    vertical-align: middle;
    width: 70px;
  }

  span {
    line-height: 10px;
    font-size: 14px;
  }
`;
