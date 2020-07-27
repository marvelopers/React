export class Strings {
  //문맥에 따른 조사선택
  static POST_POSITIONS = "은는이가을를과와";

  static fixPostPosition(str, pp) {
    const has3rd = this.hasFinalConsonant(str);
    let index = this.POST_POSITIONS.indexOf(pp);
    index = index % 2 == 0 ? index : index - 1;
    return this.POST_POSITIONS[index + (has3rd ? 0 : 1)];
  }

  static fixPositionWith(str, pp) {
    return str + this.fixPostPosition(str, pp);
  }

  static hasFinalConsonant(str) {
    const ch = str.charCodeAt(str.length - 1);
    return (ch - 44032) % 28 > 0;
  }

  static isPostPosition(ch) {
    return this.POST_POSITIONS.indexOf(ch) >= 0;
  }

  // 천단위 금액 표시
  static formatNumber(amount) {
    if (amount < 1000) {
      return `${amount}`;
    }
    const thousands = '' + amount;
    return thousands.substring(0, thousands.length - 3) + ',' + thousands.substring(thousands.length - 3, thousands.length);
  }
}