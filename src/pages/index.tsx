import Header from "../components/Header";

export default function Home(props) {
  console.log(props)
  
  return (
    <div>
      index
    </div>
  )
}

export function getServerSideProps() {
  return {
    props: {
      teste: 'teste'
    }
  }
}
