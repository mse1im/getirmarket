"use client";
import Header from '@/layout/components/header/Header';
import Footer from '@/layout/components/footer/Footer';
import Container from '@/layout/components/container/Container';
import List from '@/layout/components/list/List';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

const Homepage: React.FC<IHomePageProps> = () => {
  return (
    <Provider store={store}>
      <Header />
      <Container>
      <List />
      </Container>
      <Footer />
    </Provider>
  )
};
export default Homepage;
