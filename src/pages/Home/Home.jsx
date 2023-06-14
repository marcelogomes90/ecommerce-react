import React, { Fragment } from 'react';
import { Carousel, Space, Typography } from 'antd';
import masculinas from '../../assets/masculinas.png';
import femininas from '../../assets/femininas.png';
import bolsas from '../../assets/bolsas.png';
import joias from '../../assets/joias.png';
import sapatos from '../../assets/sapatos.png';
import eletronicos from '../../assets/eletronicos.png';

const { Title, Text } = Typography;

const contentStyle = {
  marginTop: 60,
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const productsContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 100,
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
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
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
    </Fragment>
  );
}

export default Home;
