export default {
  template: "#RegistComp",
  data() {
    return {
      name: "",
      email: "",
      hireDate: "",
      title: "",
      superV: "",
      deptName: "",
      salary: "",
      commission: "",
      titleList: [
        "사장",
        "기획부장",
        "영업부장",
        "총무부장",
        "인사부장",
        "과장",
        "영업대표이사",
        "사원",
      ],
      deptList: ["기획부", "인사부", "영업부"],
    };
  },
  methods: {
    checkHandler() {
      let err = true;
      let msg = "";
      !this.name && ((msg = "이름를 입력해주세요"), (err = false), this.$refs.name.focus());
      err &&
        !this.email &&
        ((msg = "이메일을 입력해주세요"), (err = false), this.$refs.email.focus());
      err &&
        !this.hireDate &&
        ((msg = "고용일을 입력해주세요"), (err = false), this.$refs.hireDate.focus());
      err &&
        !this.superV &&
        ((msg = "관리자를 입력해주세요"), (err = false), this.$refs.superV.focus());
      err &&
        !this.deptName &&
        ((msg = "부서명을 입력해주세요"), (err = false), this.$refs.deptName.focus());
      err &&
        !this.title &&
        ((msg = "직책을 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.salary &&
        ((msg = "연봉을 입력해주세요"), (err = false), this.$refs.salary.focus());
      err &&
        !this.commission &&
        ((msg = "커미션을 입력해주세요"), (err = false), this.$refs.commission.focus());

      if (!err) alert(msg);
      else this.createHandler();
    },
    createHandler() {
      const board = localStorage.getItem("emp_board");
      let newBoard = {
        sequence: 0,
        emps: [],
      };
      console.log(board);
      if (board) {
        newBoard = JSON.parse(board);
      }

      newBoard.sequence += 1;
      newBoard.emps.push({
        id: newBoard.sequence,
        name: this.name,
        email: this.email,
        hireDate: this.hireDate,
        title: this.title,
        deptName: this.deptName,
        salary: this.salary,
        commission: this.commission,
      });
      localStorage.setItem("emp_board", JSON.stringify(newBoard));
      alert("사원등록이 완료되었습니다.");
      location.href = "./emps.html";
    },
    moveList() {
      location.href = "./emps.html";
    },
  },
};
