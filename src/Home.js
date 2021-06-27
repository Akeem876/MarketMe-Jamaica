import React from "react";
import MainFirst from "./MainFirst";
import MainSecond from "./MainSecond";
import MainThird from "./MainThird";
import OurClients from "./OurClients";
import OurTeam from "./OurTeam";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
      <MainFirst />
      <MainSecond />
      <MainThird />
      <OurClients />
      <OurTeam />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
