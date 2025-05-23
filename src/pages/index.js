import { getAllApartments } from '@/api';
import HomePage from '@/components/HomePage';

const dummyData = [
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
  {
    name: 'Apartment - District 1 - Rae',
    imageUrl:
      'https://prod-images.cooingestate.com/processed/property_image/image/415168/high.webp',
    location: 'October Gardens, Egypt',
    size: '150 m2',
    bedrooms: '2',
    bathrooms: '2',
    price: '132,000 EGP',
    delivery: '2020',
  },
];

export default function Home({ apartments }) {
  console.log(apartments);

  // TO BE CHANGED
  return <HomePage apartments={dummyData} />;
}

export async function getServerSideProps() {
  try {
    const res = await getAllApartments();
    const apartments = res.data;

    return {
      props: { apartments },
    };
  } catch (error) {
    return {
      props: { apartments: [], error: error.message },
    };
  }
}
