import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiSofa } from "react-icons/Gi";
import { TbPerfume } from "react-icons/tb";
import { MdOutlineBroadcastOnHome } from "react-icons/md";
import "./sectionOne.css";
import { getCategory } from "../../services/getCategory";
import CardProduct from "../../components/CardProduct";
import TargetAlerSucess from "../../components/TargetAlertSucess";
import Main from "../../container/Main";
import SectionInformation from "../../components/SectionInformation";
import Carrousel from "../../components/Carrousel";

const SectionElement = styled.section`
  min-height: 400px;
  margin-top: 50px;
`;

const TitleSection = styled.h2`
  color: #333;
  font-size: 27px;
`;

const ListCategories = styled.li`
  color: #888;
  font-size: 15px;
  list-style: none;
  padding-bottom: 3px;
  cursor: pointer;
  flex: 1;
`;

const ContentCategories = styled.div`
  padding: 10px 20px;
  margin-top: 20px;
  background: #fff;
  margin-bottom: 20px;
`;

const TitleCategory = styled.h4`
  font-weight: 500;
  display: flex;
  align-item: center;
  gap: 7px;
  padding: 7px 0;
`;

const UlList = styled.ul`
  display: flex;
  justify-content: between;
  align-items: center;
  gap: 80px;
  width: 100%;
`;
const IconCategory = styled.span`
  display: grid;
  place-content: center;
  font-size: 17px;
`;

const CategoriesList = [
  {
    title: "Smartphones",
    icon: <FiSmartphone />,
    validSelected: "smartphones",
  },
  {
    title: "Laptops",
    icon: <AiOutlineLaptop />,
    validSelected: "laptops",
  },
  {
    title: "Home Decoration",
    icon: <MdOutlineBroadcastOnHome />,
    validSelected: "home-decoration",
  },
  {
    title: "Furniture",
    icon: <GiSofa />,
    validSelected: "furniture",
  },
  {
    title: "Fragrances",
    icon: <TbPerfume />,
    validSelected: "fragrances",
  },
];

export default function Home() {
  const [selected, setSelected] = useState("smartphones");
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAgregate, setAgregate] = useState(false);
  const [topProduct, setTopPRoduct] = useState();

  const handleClick = (category) => {
    setSelected(category);
  };

  useEffect(() => {
    if (selected) {
      setLoading(true);
      getCategory({ category: selected }).then((listProduct) => {
        setProducts(listProduct);
        setLoading(false);
      });
    }
  }, [selected]);

  useEffect(() => {
    getCategory({ category: "smartphones" }).then((res) => {
      console.log(res);
      setTopPRoduct(res);
    });
  }, []);

  return (
    <React.Fragment>
      <Main />
      <SectionElement className="px-[50px]">
        <TitleSection>Deals of the day</TitleSection>
        <ContentCategories>
          <UlList>
            {CategoriesList.map((lis) => (
              <ListCategories
                key={lis.title}
                className={lis.validSelected === selected ? "active" : null}
                onClick={() => handleClick(lis.validSelected)}
              >
                <TitleCategory>
                  <IconCategory>{lis.icon}</IconCategory>
                  {lis.title}
                </TitleCategory>
              </ListCategories>
            ))}
          </UlList>
        </ContentCategories>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, 300px)",
              placeContent: "center",
              gap: "15px",
              minHeight: "600px",
            }}
          >
            {products ? (
              isLoading ? (
                <h3 className="text-black">Cargando...</h3>
              ) : (
                products.map((res) => (
                  <CardProduct key={res} isDiscount={true} setAgregate={setAgregate} data={res} />
                ))
              )
            ) : null}
          </div>
          {isAgregate ? (
            <TargetAlerSucess
              styles={{ position: "fixed", top: "10px", left: "0" }}
            />
          ) : null}
        </div>
        <SectionInformation />
        <div>
          <TitleSection>Top products</TitleSection>
          <div className="min-h-[300px] mt-2">
            {topProduct ? (
              <div>
                <Carrousel>
                  {topProduct.map((res) => <CardProduct setAgregate={setAgregate} key={res.id} data={res} styles={{margin: '0 8px', width: '250px'}}/>)}
                </Carrousel>
              </div>
            ) : null}
          </div>
        </div>
      </SectionElement>
    </React.Fragment>
  );
}
