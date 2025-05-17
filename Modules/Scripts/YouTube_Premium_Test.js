// Proxy wrapper for Maasea's YouTube script with lang-mods removed

(async () => {
  const res = await fetch("https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube.response.js");
  const text = await res.text();

  // Удаляем блок с captionLang
  const cleaned1 = text.replace(
    /if\s*\(args\.captionLang[\s\S]+?languageCode\s*=\s*args\.captionLang;\s*}\);?\s*}/,
    ""
  );

  // Удаляем блок с lyricLang
  const cleaned2 = cleaned1.replace(
    /if\s*\(args\.lyricLang[\s\S]+?transcriptSearchPanelRenderer\.parameters\s*=\s*JSON\.stringify\(\{ hl: args\.lyricLang \}\);\s*}\s*}\s*}\s*}/,
    ""
  );

  // Выполняем оставшийся код
  eval(cleaned2);
})();
