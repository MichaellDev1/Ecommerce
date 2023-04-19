import {
  ContentCategories,
  IconCategory,
  ListCategories,
  SectionElement,
  TitleCategory,
  TitleSection,
  UlList,
} from "./styles";
import React, { Suspense } from "react";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { GiSofa } from "react-icons/Gi";
import { IoIosArrowDown } from "react-icons/io";
import { TbPerfume } from "react-icons/tb";
import { MdOutlineBroadcastOnHome } from "react-icons/md";
import "./sectionOne.css";
import TargetAlerSucess from "../../components/TargetAlertSucess";
import Main from "../../container/Main";
import SectionInformation from "../../components/SectionInformation";
import Carrousel from "../../components/Carrousel";
import useHome from "../../hooks/useHome";
import { useState } from "react";
const CardProduct = React.lazy(() => import("../../components/CardProduct"));

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
  const [isShow,setShow] = useState(true)
  const {
    selected,
    products,
    isLoading,
    isAgregate,
    topProduct,
    setAgregate,
    handleClick,
  } = useHome();

  const handleOpenCategory = ()=>{
    setShow(!isShow)
  }
  return (
    <React.Fragment>
      <Main />
      <SectionElement className="px-[50px]">
        <TitleSection>Deals of the day</TitleSection>
        <div className="mt-4 mb-[20px]">
          <div className="text-[#888] text-[15px] font-semibold capitalize lg:hidden flex justify-between bg-white py-3 cursor-pointer px-5" onClick={handleOpenCategory}>
            <span>{selected}</span>
            <div>
              <button>
                <IoIosArrowDown />
              </button>
            </div>
          </div>
          <ContentCategories className={`${isShow ? 'block' : 'hidden'} lg:block`}>
            <UlList className="lg:flex inline-block">
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
        </div>
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
                  <Suspense fallback={<h3>Cargando...</h3>} key={res.id}>
                    <CardProduct
                      isDiscount={true}
                      setAgregate={setAgregate}
                      data={res}
                    />
                  </Suspense>
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
                  {topProduct.map((res) => (
                    <Suspense fallback={<h3>Cargando...</h3>} key={res.id}>
                      <CardProduct
                        setAgregate={setAgregate}
                        data={res}
                        styles={{ margin: "0 8px", width: "250px" }}
                      />
                    </Suspense>
                  ))}
                </Carrousel>
              </div>
            ) : null}
          </div>
        </div>
      </SectionElement>
    </React.Fragment>
  );
}
