var edit_items = [
    { video: "nano3d/1/src.mp4", video2: "nano3d/1/tgt.mp4",
      prompt: "nano3d/1/tgt.png",
      model: "nano3d/1/src.glb", model2: "nano3d/1/tgt.glb",
      source: "Nano3D", alt: "nano3d_1", text: "Add a decorative shield to the knight&#39;s back" },

    { video: "nano3d/2/src.mp4", video2: "nano3d/2/tgt.mp4",
      prompt: "nano3d/2/tgt.png",
      model: "nano3d/2/src.glb", model2: "nano3d/2/tgt.glb",
      source: "Nano3D", alt: "nano3d_2", text: "Add a decorative shield to the knight&#39;s back" },

    { video: "nano3d/3/src.mp4", video2: "nano3d/3/tgt.mp4",
      prompt: "nano3d/3/tgt.png",
      model: "nano3d/3/src.glb", model2: "nano3d/3/tgt.glb",
      source: "Nano3D", alt: "nano3d_3", text: "Add a decorative shield to the knight&#39;s back" },

    { video: "nano3d/4/src.mp4", video2: "nano3d/4/tgt.mp4",
      prompt: "nano3d/4/tgt.png",
      model: "nano3d/4/src.glb", model2: "nano3d/4/tgt.glb",
      source: "Nano3D", alt: "nano3d_4", text: "Add a decorative shield to the knight&#39;s back" },

    { video:"nano3d/5/src.mp4", video2:"nano3d/5/tgt.mp4",
    prompt:"nano3d/5/tgt.png",
    model:"nano3d/5/src.glb", model2:"nano3d/5/tgt.glb",
    source:"Nano3D", alt:"nano3d_5", text:"Add a decorative shield to the knight&#39;s back" },

    { video:"nano3d/6/src.mp4", video2:"nano3d/6/tgt.mp4",
    prompt:"nano3d/6/tgt.png",
    model:"nano3d/6/src.glb", model2:"nano3d/6/tgt.glb",
    source:"Nano3D", alt:"nano3d_6", text:"Add a decorative shield to the knight&#39;s back" },

    { video:"nano3d/7/src.mp4", video2:"nano3d/7/tgt.mp4",
    prompt:"nano3d/7/tgt.png",
    model:"nano3d/7/src.glb", model2:"nano3d/7/tgt.glb",
    source:"Nano3D", alt:"nano3d_7", text:"Add a decorative shield to the knight&#39;s back" },

    { video:"nano3d/8/src.mp4", video2:"nano3d/8/tgt.mp4",
    prompt:"nano3d/8/tgt.png",
    model:"nano3d/8/src.glb", model2:"nano3d/8/tgt.glb",
    source:"Nano3D", alt:"nano3d_8", text:"Add a decorative shield to the knight&#39;s back" },
];


function edit_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(edit_window_template(${JSON.stringify(item)}))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; display: flex; gap: 8px;">
                    <div style="flex: 1; aspect-ratio: 1;">
                        <video autoplay playsinline loop muted
                             style="width: 100%; height: 100%; object-fit: cover;"
                             src="assets_glb/${item.video}"></video>
                    </div>
                    <div style="flex: 1; aspect-ratio: 1;">
                        <video autoplay playsinline loop muted
                             style="width: 100%; height: 100%; object-fit: cover;"
                             src="assets_glb/${item.video2}"></video>
                    </div>
                </div>
                <div class="caption">
                    <div class="x-image-prompt">
                        <img src="assets_glb/${item.prompt}" alt="${item.alt}">
                    </div>
                    <div class="x-handwriting" style="text-align: center; margin-top: 10px; margin-bottom: 10px;">
                        ${item.text}
                    </div>
                </div>
            </div>`;
}

function edit_window_template(item) {
    let prompt = `<div class="x-image-prompt"><img src="assets_glb/${item.prompt}" alt="${item.alt}"></div>`;
    let text = `<div class="x-handwriting">${item.text}</div>`;
    let panel = edit_asset_panel_template(prompt, text);
    item = JSON.parse(JSON.stringify(item));
    item.model = 'assets_glb/' + item.model
    item.model2 = 'assets_glb/' + item.model2
    return edit_modelviewer_window_template(item, panel);
}
