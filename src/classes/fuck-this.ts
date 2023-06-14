export default class FuckThis {
  value = "fuck";
  constructor(ahh?: string) {
    if (ahh) {
      this.value = ahh;
    }
  }

  fuck() {
    return "fuck";
  }

  fuckTitle() {
    return "Fuck";
  }

  fuckWithInput(input: string) {
    return "fuck" + " " + input;
  }

  fuckTitleWithInput(input: string) {
    return "Fuck" + " " + input;
  }
}
