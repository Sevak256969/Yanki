import styled from "styled-components";

//Header
export const Header1 = styled.header`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;
export const NavAll = styled.nav`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Headerdiv = styled.header`
  display: flex;
  align-items: center;
`;
export const MenuDiv = styled.div`
  display: grid;
  gap: 8px;
  color: white;
  color: ${({ type }) => (type === "withdraw" ? "white" : "#e0bea2")};
`;
export const NavUl = styled.ul`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    background-color: #bb3759;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: 55px;
    left: 0;
    width: 150px;
    padding: 1.5rem 0;
    transition: transform 0.3s ease-in-out;
  }
`;
export const NavLi = styled.li`
  a {
    text-decoration: none;
    color: ${({ type }) => (type === "withdraw" ? "white" : "black")};
    &.active {
      color: #e0bea2;
    }
  }
`;
export const NavDiv = styled.div`
  display: flex;
  color: white;
  gap: 25px;
  color: ${({ type }) => (type === "withdraw" ? "white" : "#e0bea2")};
  &.active {
    color: black;
  }
`;
export const IconDiv = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    display: flex;
    gap: 15px;
  }
`;
export const IconSpan = styled.span`
  @media (max-width: 768px) {
    display: flex;
    gap: 15px;
  }
`;
//Pages
//Home
//Collection
export const Section1 = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 106vh;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 106vh;
  }
`;
export const SectionImg = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
export const ImgMobile = styled.div`
  @media (max-width: 768px) {
    display: flex;
    z-index: -1;
    background: linear-gradient(
        180deg,
        rgba(61, 61, 61, 0.5) 0%,
        rgba(61, 61, 61, 0) 100%
      ),
      url(.jpg);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;
export const SectionImgDiv = styled.div`
  width: 33.3%;
`;
export const HomeTextParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: white;
  @media (max-width: 768px) {
    display: flex;
    margin-top: 500px;
  }
`;
export const HomeTextH2 = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 46px;
  line-height: 100px;
  &:after {
    content: "";
    display: block;
    margin: auto;
    border: 1px solid;
    width: 120px;
    color: white;
  }
`;
export const HomeTextP = styled.p`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
`;
//Home
//Categories
export const Section = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 600px;
  }
`;
export const CategoriesH2 = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
`;
export const SlideParent = styled.div`
  display: flex;
  gap: 0 15px;
  z-index: -1;
  position: relative;
`;
export const SlideButton = styled.button`
  width: 40px;
  height: 40px;
  background: #e0bea2;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: relative;
  top: 248px;
  left: 34px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #e0bea2;
    border: 1px solid rgba(34, 34, 34, 0.287);
    position: relative;
    top: 143px;
    left: 10px;
  }
`;
export const SlideButtonNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #e0bea2;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: relative;
  top: 287px;
  right: 34px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    background: #e0bea2;
    border: 1px solid rgba(34, 34, 34, 0.287);
    position: relative;
    top: 172px;
    right: 10px;
  }
`;
export const SlideParentDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const BtnNext = styled.div`
  display: flex;
  justify-content: end;
  @media (max-width: 768px) {
    display: flex;
    justify-content: end;
  }
`;
export const Btn = styled.button`
  width: 40px;
  height: 40px;
  background: #e0bea2;
  border: 1px solid rgba(34, 34, 34, 0.287);
`;
export const SlideParentP = styled.p`
  margin: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(224, 190, 162, 0.75);
  backdrop-filter: blur(3px);
  padding: 7px 0 9px 0;
  text-align: center;
  @media (max-width: 768px) {
    background: rgba(224, 190, 162, 0.75);
    backdrop-filter: blur(3px);
  }
`;
//Login
export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;
export const LoginDiv = styled.div`
  display: contents;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const LoginH2 = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  @media (max-width: 768px) {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
`;
export const Input = styled.input`
  width: 600px;
  text-align: center;
  border: 1px solid black;
  padding: 16px 0;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  color: rgba(37, 37, 37, 0.5);
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 335px;
  }
`;
export const RegDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 335px;
  }
`;
export const Button = styled.button`
  width: 600px;
  background: #e0bea2;
  border: none;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  padding: 17px 0;
  color: white;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 335px;
  }
`;
export const LoginP = styled.p`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  @media screen {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
`;
//Pages
//Catalog
export const SectionCatalog = styled.section`
  width: 80%;
  margin: auto;
`;
export const CatalogDiv = styled.div`
  display: flex;
  gap: 134px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const CatDiv = styled.div`
  display: flex;
  gap: 145px;
  padding: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FilterDiv = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;
export const CatalogsDiv = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e0bea2;
    border: none;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    padding: 17px 0;
    color: white;
  }
`;
export const SelectSec = styled.select`
  border: none;
  outline: none;
`;
export const BtnFilter = styled.button`
  border: none;
  outline: none;
  background-color: #e0bea2;
  padding: 4px;
  color: white;
`;
export const CatCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  a {
    color: black;
    text-decoration: none;
  }
`;
export const ImgDataDiv = styled.div`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1150px) {
    display: grid;
    gap: 26px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const SectionDiv = styled.div`
  display: flex;
  gap: 57px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const CatSpan = styled.span`
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.3px solid #252525;
  }
`;
export const ImgItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgDiv = styled.div`
  display: flex;
  gap: 5px;
`;
export const Img = styled.img`
  position: relative;
  bottom: 13px;
  left: -25px;
`;
export const ImgSrtik = styled.div`
  position: absolute;
  padding: 0 0 0 249px;
`;
//Pages
//Contact
export const ContactSection = styled.section`
  width: 80%;
  margin: auto;
`;
export const ContactMain = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
`;
export const ContactP = styled.p`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
`;
export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }
`;
export const ContactFirstChild = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
`;
export const ContactChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;
export const ContactUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const ContactH2 = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
`;
export const WearDiv = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 50px 0;
`;
export const WearItemsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//Footer
export const FooterSection = styled.footer`
  width: 80%;
  margin: auto;
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;
export const FooterLi = styled.li`
  display: flex;
  gap: 15px;
  a {
    text-decoration: none;
    color: black;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
  }
`;
export const FooterFirstChild = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const FooterChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const FooterH2 = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
`;
export const FooterUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const FooterP = styled.p`
  display: flex;
  justify-content: center;
`;
//Error404
export const Err404 = styled.div`
  grid-column: 2;
`;
export const MainDiv = styled.main`
  display: flex;
  justify-content: center;
`;
