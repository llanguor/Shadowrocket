// Proxy wrapper for Maasea's YouTube script — strips captionLang and lyricLang

(async () => {
  const res = await fetch("https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube.response.js");
  let code = await res.text();

  // Удаляем блок: if (args.captionLang ... )
  code = code.replace(
    /if\s*\(\s*args\.captionLang\s*&&[\s\S]+?captionTracks\?\.\s*forEach\([^}]+?\}\);?\s*\}/,
    ""
  );

  // Удаляем блок: if (args.lyricLang ... )
  code = code.replace(
    /if\s*\(\s*args\.lyricLang\s*&&[\s\S]+?transcriptSearchPanelRenderer\.parameters\s*=\s*JSON\.stringify\(\{ hl: args\.lyricLang \}[^}]+?\}\s*\}\s*\}/,
    ""
  );

  // Выполняем модифицированный скрипт с аргументами Shadowrocket
  const func = new Function("args", code);
  func(typeof $argument === "string" ? JSON.parse($argument || "{}") : {});
})();
