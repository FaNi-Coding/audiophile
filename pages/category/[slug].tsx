import {useState} from 'react';
import {useRouter} from 'next/router';
export interface ICategoryProps {
}

const Category = (props: ICategoryProps) => {
     const router = useRouter();
     const [id, setId] = useState(router.query.id !== undefined ? router.query.id : 12);
  return (
    <div>
      <h1>Hello, {id&& router.query.id}.</h1>
    </div>
  );
}

export default Category;
