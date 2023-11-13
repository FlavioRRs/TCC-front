import Problem from "./Problem";

export default function getProblems(html: string): Problem[] {
  let problems: Problem[] = [];
  const parser = new DOMParser();
  const documento = parser.parseFromString(html, "text/html");

  // verificar questões dos textos alternativos
  let naoTemAlt = false;
  const imgs = documento.querySelectorAll("img");
  imgs.forEach(tag => {
    if(!tag.hasAttribute("alt") || !tag.getAttribute("alt")) {
      naoTemAlt = true;
    }
  })
  naoTemAlt && problems.push(new Problem("Falta de nome alternativo em imagens.", "1.1.1", "As suas tags <img> precisam possuir o atributo alt com um texto descrevendo o que esta presente na imagem!", "A", "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html", "https://www.w3schools.com/tags/att_img_alt.asp"));
  // verificar a presença de track
  const videos = documento.querySelectorAll("video");
  let naoTemTrack = false
  if(videos.length !== 0) {
    videos.forEach(video => {
      const track = video.querySelector("track");
      if (track === null) {
        naoTemTrack = true;
      }
    })
  }
  naoTemTrack && problems.push(new Problem("Falta de legenda em vídeo pré-gravado", "1.2.2", "Todas tags <video> precisam possuir uma tag filha <track> contendo uma legenda!", "A", "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded", "https://www.w3schools.com/tags/tag_track.asp#gsc.tab=0"))

  // verifica a questão do title
  if (!html.includes("<title>") && !html.includes("</title>")) {
    problems.push(new Problem("Falta de título", "2.4.2" ,"O seu arquivo HTML precisa possuir uma tag <title> no <head>, contendo um título que faça sentido com a página!", "A", "https://www.w3.org/WAI/WCAG22/Understanding/page-titled", "https://www.w3schools.com/tags/tag_title.asp"));
  }

  // verificar se o site possui definida a lang
  const htmlTag = documento.querySelector("html");
  if(!htmlTag?.hasAttribute("lang") || !htmlTag?.getAttribute("lang")) {
    problems.push(new Problem("Falta de um idioma definido.", "3.1.1", "Sua tag <html> precisa possuir um atributo lang com a linguagem que está sua página!", "A", "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page", "https://www.w3schools.com/tags/ref_language_codes.asp"))
  }

  // verificar presença de autocomplete em inputs
  const inputs = documento.querySelectorAll("input");
  let naoTemAutoComplete = false;
  inputs.forEach(input => {
    if (!input.hasAttribute("autocomplete") || !input.getAttribute("autocomplete")) {
      naoTemAutoComplete = true;
    }
  })
  naoTemAutoComplete && problems.push(new Problem("Falta definir um autocomplete no(s) seu(s) input(s).", "1.3.5", "Todas tags <input> precisam possuir o atributo autocomplete categorizando o que será inserido naquele campo!", "AA", "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose", "https://www.w3schools.com/tags/att_input_autocomplete.asp"))

  return problems
}
