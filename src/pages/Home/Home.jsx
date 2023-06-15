import React, { Fragment } from 'react';
import { Carousel, Space, Typography } from 'antd';
import masculinas from '../../assets/masculinas.png';
import femininas from '../../assets/femininas.png';
import bolsas from '../../assets/bolsas.png';
import joias from '../../assets/joias.png';
import sapatos from '../../assets/sapatos.png';
import eletronicos from '../../assets/eletronicos.png';
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import banner4 from '../../assets/banner4.png';

const { Title, Text } = Typography;

const carouselContent = {
  marginTop: 64,
  height: '640px',
  width: '100%',
  background: '#364d79',
};

const productsContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 100,
}

const brandsContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 100,
}

const brandImage = {
  width: 380,
  height: 90,
}

const productImage = {
  width: 140,
  height: 140,
}

const productContent = {
  textAlign: 'center',
}

const productTitle = {
  textAlign: 'center',
  margin: 60
}

const divImage = {
  width: 180,
  height: 180,
  borderRadius: 90,
  backgroundColor: '#eaeaea',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function Home() {
  return (
    <Fragment>
      <Carousel autoplay>
        <div>
          <img src={banner1} style={carouselContent}/>
        </div>
        <div>
          <img src={banner2} style={carouselContent}/>
        </div>
        <div>
          <img src={banner3} style={carouselContent}/>
        </div>
        <div>
          <img src={banner4} style={carouselContent}/>
        </div>
      </Carousel>

      <Title level={3} style={productTitle}>Produtos</Title>

      <Space size="large" style={productsContainer}>
        <Space direction="vertical" style={productContent}>
          <div style={divImage}>
            <img style={productImage} src={masculinas}/>
          </div>
          <Text strong>Moda Masculina</Text>
        </Space>

        <Space direction="vertical" style={productContent}>
          <div style={divImage}>
          <img style={productImage} src={femininas}/>
          </div>
          <Text strong>Moda Feminina</Text>
        </Space>

        <Space direction="vertical" style={productContent}>
          <div style={divImage}>
            <img style={productImage} src={bolsas}/>
          </div>
          <Text strong>Bolsas</Text>
        </Space>

        <Space direction="vertical" style={productContent}>
          <div style={divImage}>
            <img style={productImage} src={joias}/>
          </div>
          <Text strong>Joias</Text>
        </Space>

        <Space direction="vertical" style={productContent}>
          <div style={divImage}>
            <img style={productImage} src={sapatos}/>
          </div>
          <Text strong>Sapatos</Text>
        </Space>
        
        <Space direction="vertical" style={productContent}>
          <div style={divImage}>
            <img style={productImage} src={eletronicos}/>
          </div>
          <Text strong>Eletrônicos</Text>
        </Space>
      </Space>

      <Title level={3} style={productTitle}>Marcas</Title>

      <Space size="large" style={brandsContainer}>
        <img style={brandImage} src={brand1}/>
        <img style={brandImage} src={brand2}/>
        <img style={brandImage} src={brand3}/>
      </Space>
    </Fragment>
  );
}

export default Home;
