
import re

def extract_utf16_strings(file_path):
    with open(file_path, "rb") as f:
        data = f.read()
    
    # Extract sequences of UTF-16 printable characters
    # UTF-16-LE usually: [char] \x00 [char] \x00
    strings = re.findall(b"([\x20-\x7E]\x00){10,}", data)
    
    # Also try to just decode the whole thing as utf-16-le and handle errors
    try:
        text = data.decode("utf-16-le", errors="ignore")
        # Find sequences of printable characters in the decoded text
        printable = re.findall(r"[\x20-\x7E\s]{10,}", text)
        for s in printable:
            if len(s.strip()) > 10:
                print(s.strip())
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_utf16_strings(r"F:\Projects\cnk-law-website\public\CNK- COMPANY PROFILE (1).ppt")
