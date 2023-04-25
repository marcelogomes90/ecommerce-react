import React from "react";

import {
  GithubOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Divider, Layout, Space, Tooltip, Typography } from "antd";
import { footerStyle } from "./Footer.style";

const { Footer } = Layout;
const { Text } = Typography;

function AppFooter() {
  return (
    <Footer style={footerStyle}>
      <Text type="secondary">
        Bem-vindo ao nosso e-commerce de roupas e acessórios! <br />
        Este é um projeto pessoal desenvolvido com o objetivo de aplicar
        conhecimentos em programação e aprimorar habilidades técnicas. <br />
        Nosso site não é comercial e não tem fins lucrativos. Aqui, você
        encontra uma seleção de peças cuidadosamente escolhidas para ilustrar a
        proposta do nosso projeto. <br />
        Agradecemos pela sua visita e esperamos que goste do que oferecemos.{" "}
        <br />
        Caso tenha alguma sugestão ou comentário, não hesite em entrar em
        contato conosco. <br />
        Obrigado por nos acompanhar nessa jornada!
      </Text>
      <Divider />
      <Space direction="vertical">
        <Text type="secondary">Desenvolvido por Marcelo Gomes © - 2023</Text>
        <Space>
          <Tooltip title="Github">
            <Button
              type="primary"
              shape="circle"
              href="https://github.com/marcelogomes90/"
              target="_blank"
              icon={<GithubOutlined />}
            ></Button>
          </Tooltip>
          <Tooltip title="WhatsApp">
            <Button
              type="primary"
              shape="circle"
              href="https://api.whatsapp.com/send?phone=5581998066509"
              target="_blank"
              icon={<WhatsAppOutlined />}
            ></Button>
          </Tooltip>
          <Tooltip title="Linkedin">
            <Button
              type="primary"
              shape="circle"
              href="https://www.linkedin.com/in/marcelogomes90"
              target="_blank"
              icon={<LinkedinOutlined />}
            ></Button>
          </Tooltip>
          <Tooltip title="E-mail">
            <Button
              type="primary"
              shape="circle"
              href="mailto:“marcelo.sobrinho@outlook.com"
              target="_blank"
              icon={<MailOutlined />}
            ></Button>
          </Tooltip>
        </Space>
      </Space>
    </Footer>
  );
}

export default AppFooter;
