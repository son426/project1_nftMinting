import { useState, useEffect, useId } from "react";
// 파이어베이서 파일에서 import 해온 db
import { db } from "../firebase";
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Helmet } from "react-helmet";

function Practice() {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [projectNum, setProjectNum] = useState("");
  const [imgId, setImgId] = useState(0);
  const [dataset, setDataset] = useState([]);
  const [changed, setChanged] = useState(false);
  const [myCollection, setMyCollection] = useState([]);
  // db의 dataset 컬렉션을 가져옴
  const datasetCollectionRef = collection(db, "dataset");

  // 유니크 id를 만들기 위한 useId(); - react 18 기능으로, 이 훅을 이렇게 사용하는게 맞고 틀린지는 모른다.
  const uniqueId = useId();

  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getDataset = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(datasetCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setDataset(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDataset();
  }, [changed]);

  const createDataset = async () => {
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가한다.
    await addDoc(datasetCollectionRef, {
      projectNum: projectNum,
      imgId: Number(imgId),
    });
  };

  const updateDataset = async (id, age) => {
    // 내가 업데이트 하고자 하는 db의 컬렉션의 id를 뒤지면서 내가 수정하고자 하는 id랑 같은 id값을 가진 데이터를 찾는다
    const datasetDoc = doc(db, "dataset", id);
    // 내가 업데이트 하고자 하는 key를 어떻게 업데이트할지 준비,, 중요한점이 db에는 문자열로 저장되어있다. 그래서 createDataset()함수안에서 age를 생성할때 숫자열로 형변환 해줘야한다
    const newField = {
      projectNum: { projectNum },
      imgId: { imgId },
      myCollection: { myCollection },
    };
    console.log("찍어보기 : ", projectNum, imgId);
    // updateDoc()을 이용해서 업데이트
    await updateDoc(datasetDoc, newField);
  };

  // 띄워줄 데이터 key값에 고유ID를 넣어준다.
  const showDataset = dataset.map((value) => (
    <div key={uniqueId}>
      <h1>현재 데이터셋 {uniqueId}</h1>
      <h1>projectNum: {value.projectNum}</h1>
      <h1>imgId: {value.imgId}</h1>
      <h1>myCollection: {value.myCollection}</h1>
      {/* 증가버튼은 이 안에 있어야지, 각기 다른 데이터마다 붙는다, users data를 map으로 돌기때문에, 그 안의 id랑 age를 넣어주면 된다.
      id를 넣어주는 이유는, 우리가 수정하고자 하는 데이터를 찾아야하기 때문에. */}
      {/* <button
        onClick={() => {
          updateDataset(value.id, value.age);
          setChanged((prev) => !prev);
        }}
      >
        Increase Age
      </button> */}
    </div>
  ));

  return (
    <div className="Practice">
      {/* onchange를 이용해서, 변하는 값을 state로 저장한다. */}

      <form>
        <input
          type="text"
          value={projectNum}
          placeholder="projectNum"
          onChange={(event) => {
            setProjectNum(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="imgId"
          onChange={(event) => {
            setImgId(event.target.value);
          }}
        />
        <button action="submit" onClick={createDataset}>
          myCollection에 추가하기
        </button>
      </form>
      <h1 style={{ fontSize: "25px", fontWeight: "600", marginBottom: "20px" }}>
        마이 컬렉션
      </h1>
      {showDataset}
    </div>
  );
}

export default Practice;
