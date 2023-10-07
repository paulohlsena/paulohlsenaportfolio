const title = document.getElementById('conhecimentotitle');
const desc = document.getElementById('conhecimentodesc');
const progressvalue = document.getElementById('progress');
const titlehtml = "HTML 5";
const deschtml = "HTML5 é a quinta versão do padrão HTML para criação de páginas web. Ele introduz elementos semânticos como &lt;header&gt;, &lt;footer&gt; e suporte nativo para áudio e vídeo com as tags &lt;audio&gt; e &lt;video&gt;. Além disso, oferece APIs para geolocalização e armazenamento local de dados, simplifica a validação de formulários e permite gráficos e animações com &lt;canvas&gt; e &lt;svg&gt;. Sua flexibilidade e funcionalidades avançadas tornam-no essencial para o desenvolvimento web moderno."
const progresshtml = "70";

const titlecss = "CSS 3";
const desccss = "CSS3 é uma linguagem de estilo usada para controlar a apresentação visual de páginas web. Introduziu recursos avançados, transições, animações, sombras, e gradientes, permitindo aos desenvolvedores criar layouts mais sofisticados e interativos. Com suporte a propriedades como border-radius, box-shadow e flexbox, CSS3 oferece maior flexibilidade e expressividade no design, melhorando significativamente a experiência do usuário em sites e aplicativos online.";
const progresscss = "75";

const titlejs = "JavaScript";
const descjs = "JavaScript é uma linguagem de programação versátil e essencial para desenvolvimento web. Sendo uma linguagem do lado do cliente, JavaScript permite criar dinamismo, validar formulários, manipular elementos HTML, e interagir com APIs, proporcionando experiências ricas aos usuários. Sua sintaxe amigável e ampla adoção na comunidade de desenvolvedores fazem dele uma habilidade valiosa para quem trabalha com tecnologia web.";
const progressjs = "40";

const titlets = "TypeScript";
const descts = "TypeScript é uma extensão do JavaScript que adiciona suporte a tipos estáticos, proporcionando maior segurança e prevenção de erros durante o desenvolvimento de software. Desenvolvida pela Microsoft, ela permite a definição de tipos para variáveis, parâmetros e estruturas de dados, tornando o código mais robusto e legível. É especialmente valiosa para projetos complexos, oferecendo um ambiente de desenvolvimento eficiente e seguro. Sua compatibilidade com as últimas características do ECMAScript e integração suave com bibliotecas JavaScript a tornam uma escolha popular entre os desenvolvedores modernos."
const progressts = "15"

const titlereact = "ReactJS"
const descreact = "React.js é uma poderosa biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário interativas e dinâmicas em aplicações web. Sua abordagem baseada em componentes facilita a construção de UIs reutilizáveis e eficientes. Além disso, React.js oferece uma manipulação eficaz do DOM, melhorando a performance das aplicações. Com uma comunidade ativa e extenso suporte, é uma escolha popular para desenvolvedores, proporcionando ferramentas robustas para o desenvolvimento moderno de aplicações web."
const progressreact = "15"

function infocss(){
    title.innerHTML = titlecss;
    desc.innerHTML = desccss;  
    progressvalue.value = progresscss;      
}

function infojs(){
    title.innerHTML = titlejs;
    desc.innerHTML = descjs;  
    progressvalue.value = progressjs;
}

function infohtml(){
    title.innerHTML = titlehtml;
    desc.innerHTML = deschtml;  
    progressvalue.value = progresshtml;
}

function infots(){
    title.innerHTML = titlets;
    desc.innerHTML = descts;  
    progressvalue.value = progressts;
}

function inforeact(){
    title.innerHTML = titlereact;
    desc.innerHTML = descreact;  
    progressvalue.value = progressreact;
}
