// H  E  A  D  E  R
    let Header = document.createElement("header");
let HeaderA = document.createElement("a");
let HeaderATextNode = document.createTextNode("Mohamed Nour");
let HeaderAattribute = document.createAttribute("href");
let DivHeader = document.createElement("div");
HeaderA.appendChild(HeaderATextNode);
HeaderA.setAttributeNode(HeaderAattribute);
HeaderA.style.cssText = `
color: blue;
font-size: 23px;
font-weight: bold;
text-decoration: none;
font-family: monospace;
`;
HeaderA.href = "index.html";
HeaderA.classList = "Header-a";
let HeaderLink = document.createElement("ul");
let HeaderLinkLi1 = document.createElement("li");
let HeaderLinkLi2 = document.createElement("li");
let HeaderLinkLi3 = document.createElement("li");
let HeaderLinkLi4 = document.createElement("li");
let HeaderLinka1 = document.createElement("a");
let HeaderLinka2 = document.createElement("a");
let HeaderLinka3 = document.createElement("a");
let HeaderLinka4 = document.createElement("a");
let HeaderLinkAtextNode1 = document.createTextNode("Home");
let HeaderLinkAtextNode2 = document.createTextNode("About");
let HeaderLinkAtextNode3 = document.createTextNode("Service");
let HeaderLinkAtextNode4 = document.createTextNode("Contact");
HeaderLinka1.setAttribute("href", "index.html");
HeaderLinka2.setAttribute("href", "#About");
HeaderLinka3.setAttribute("href", "#Service");
HeaderLinka4.setAttribute("href", "#Contact");
HeaderLinka1.appendChild(HeaderLinkAtextNode1);
HeaderLinka2.appendChild(HeaderLinkAtextNode2);
HeaderLinka3.appendChild(HeaderLinkAtextNode3);
HeaderLinka4.appendChild(HeaderLinkAtextNode4);
HeaderLinkLi1.appendChild(HeaderLinka1);
HeaderLinkLi2.appendChild(HeaderLinka2);
HeaderLinkLi3.appendChild(HeaderLinka3);
HeaderLinkLi4.appendChild(HeaderLinka4);
HeaderLink.appendChild(HeaderLinkLi1);
HeaderLink.appendChild(HeaderLinkLi2);
HeaderLink.appendChild(HeaderLinkLi3);
HeaderLink.appendChild(HeaderLinkLi4);
HeaderLink.classList = 'Links';
Header.classList = "Header";
DivHeader.classList = "Content";
DivHeader.appendChild(HeaderA);
DivHeader.appendChild(HeaderLink);
Header.appendChild(DivHeader);
document.body.prepend(Header);
let All_Links_A_in_Ul_Header = document.querySelectorAll('.Content .Links li a');
for (let i=0;i<All_Links_A_in_Ul_Header.length;i++) {
    All_Links_A_in_Ul_Header[i].style.cssText = `
    text-decoration: none;
    color: rgb(0, 41, 119);
    font-size: 15px;
    font-weight: 900;
    font-family: monospace;
    border: 1px solid rgb(0, 41, 119);
    border-radius: 10px;
    padding: 10px 15px;
    display: inline-block;
    width: 90px;
    text-align: center;
    margin-inline: 2px;
    transition: .3s;
    `;
}
DivHeader.style.cssText = `
display: flex;
justify-content: space-between;
align-items: center;
`;
Header.style.cssText = `
padding: 20px;
background-image: linear-gradient(to right, white, #00bcff);
`;
HeaderLink.style.cssText = `
list-style: none;
display: flex;
justify-content: center;
align-items: center;
`;
// M  A  I  N
let Main = document.createElement("main");
let Main_Div_Parent = document.createElement("div");
let Main_Div_Child = document.createElement("div");
let Main_Div_Child_Span = document.createElement("span");
let Child_TextNode = "Product";

for(let i=0;i<15;i++) {
    let Clone_Child_Div = Main_Div_Child.cloneNode(true);
    let Clone_Span = Main_Div_Child_Span.cloneNode(true);
    Clone_Span.style.cssText = `
    font-size: 30px;
    color: #ccc;
    `;
    Clone_Span.append(`${i+1}`)
    Clone_Child_Div.appendChild(Clone_Span);
    Clone_Child_Div.classList = `Span${i + 1}`;
    Clone_Child_Div.append(Child_TextNode+` ${i+1}`);
    Main_Div_Parent.appendChild(Clone_Child_Div);
}
Main.style.cssText = `
padding: 10px;
background-color: #444;
`;
Main_Div_Parent.style.cssText = `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;
Main.classList = "Main";
Main.appendChild(Main_Div_Parent);
Header.after(Main);
let AllChildDiv = document.querySelectorAll(".Main div div");
console.log(AllChildDiv);
for(let i=0;i<AllChildDiv.length;i++) {
    AllChildDiv[i].style.cssText = `
    padding: 60px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    border: 1px solid white;
    border-radius: 16px;
    width: calc((100% - 20px)/3);
    `;
}
// F  O  O  T  E  R
let Footer = document.createElement("footer");
let Footer_p = document.createElement("p");
let Footer_p_TextNode = document.createTextNode("Made By Mohamed Nour Abdo Copyradit 2023");
Footer_p.appendChild(Footer_p_TextNode);
Footer_p.classList = "Footer_P";
Footer.appendChild(Footer_p);
Footer.classList = "Footer";
Main.after(Footer);
document.getElementsByClassName("Footer")[0].style.cssText = `
text-align: center;
padding-block: 20px;
background-color: #777;
`;
document.getElementsByClassName("Footer_P")[0].style.cssText = `
font-size: 20px;
color: white;
`;

