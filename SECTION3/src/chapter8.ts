/*서로소 유니온
교집합이 없는 타입들로만 만든 유니온 타입*/

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// function login(user: User) {
//   if ("kickCount" in user) {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//   } else if ("point" in user) {
//     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
//   } else {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
//   }
// }

// function login(user: User) {
//   if (user.tag === "ADMIN") {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//   } else if (user.tag === "Guest") {
//     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
//   } else {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
//   }
// }

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case "Guest": {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
    }
  }
}

type loading = {
  state: "LOADING";
};
type failed = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type success = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
type AsyncTask = loading | failed | success;

function AsyncProtocal(user: AsyncTask) {
  switch (user.state) {
    case "FAILED": {
      console.log("failed");
      break;
    }
    case "LOADING": {
      console.log("loading");
      break;
    }
    case "SUCCESS": {
      console.log("success");
      break;
    }
  }
}
// 동시에 여러가지를 표현해야하는 코드를 짤때는 서로소 유니온 태그를 만든다.
