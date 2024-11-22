export function jsonToXml(
  obj: Record<string, string | number | boolean>,
  rootName: string = "root"
): string {
  function createXmlNode(key: string, value: any): string {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      return `<${key}>${jsonToXml(value)}</${key}>`;
    } else if (Array.isArray(value)) {
      return value.map((item) => createXmlNode(key, item)).join("");
    } else {
      return `<${key}>${value}</${key}>`;
    }
  }

  let xml = "";
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      xml += createXmlNode(key, obj[key]);
    }
  }

  return `<${rootName}>${xml}</${rootName}>`;
}
