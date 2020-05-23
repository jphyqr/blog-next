import React from "react";
import firebase from "../../firebase";

import ShowRelic from "../../components/relics/ShowRelic";
const Relic = ({ data }) => {
  console.log("relic", data);

  return (
    <div className="container">
      <ShowRelic data={data} />

      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </div>
  );
};

// Relic.getInitialProps = async ({ query }) => {
//   const firestore = firebase.firestore();
//   const relicRef = firestore.collection("relics").doc(query.relicId);
//   let relicSnap = await relicRef.get();
//   let data = relicSnap.data();

//   Object.assign(data, { id: query.relicId });

//   console.log("relic ssr", data);

//   return { data };
// };

export async function getStaticProps({ params, preview = false }) {
  console.log("GET STATIC PROPS", params);
  const firestore = firebase.firestore();
  const relicsRef = firestore.collection("relics").doc(params?.relicId);

  let relicsSnap = await relicsRef.get();

  let data = await relicsSnap.data();
  console.log("GET STATIC PROPS", data);
  Object.assign(data, { id: params.relicId });

  return { props: { data: data } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const firestore = firebase.firestore();
  const relicsRef = firestore.collection("relics");

  let relicsSnap = await relicsRef.get();

  let loadedRelics = [];

  relicsSnap.forEach((doc) => {
    loadedRelics.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  const paths = loadedRelics.map((post) => `/relics/${post.id}`);
  console.log("GET STATIC PATHS", paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default Relic;
