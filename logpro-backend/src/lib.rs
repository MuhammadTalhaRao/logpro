use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn filter_logs(log_txt: &str, search: &str) -> String {
    log_txt
        .lines()
        .filter(|line| line.contains(search))
        .collect::<Vec<&str>>()
        .join("\n")
}
