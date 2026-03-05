import { startChallenge01 } from "./modules/challenge-01.js";
import { startChallenge02 } from "./modules/challenge-02.js";
import { startChallenge03 } from "./modules/challenge-03.js";
import { startChallenge04 } from "./modules/challenge-04.js";
import { startChallenge05 } from "./modules/challenge-05.js";
import { startChallenge06 } from "./modules/challenge-06.js";
import { startChallenge07 } from "./modules/challenge-07.js";
import { startChallenge08 } from "./modules/challenge-08.js";
import { startChallenge09 } from "./modules/challenge-09.js";
import { startChallenge10 } from "./modules/challenge-10.js";
import { startChallenge11 } from "./modules/challenge-11.js";

const BTN_START = document.getElementById("btn-start-challenges");

BTN_START.addEventListener("click", () => {
  startChallenge01();
  startChallenge02();
  startChallenge03();
  startChallenge04();
  startChallenge05();
  startChallenge06();
  startChallenge07();
  startChallenge08();
  startChallenge09();
  startChallenge10();
  startChallenge11();
});
