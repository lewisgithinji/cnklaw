
import re

def extract_strings(file_path):
    with open(file_path, "rb") as f:
        data = f.read()
    
    # Extract sequences of printable characters
    strings = re.findall(b"[\x20-\x7E]{10,}", data)
    for s in strings:
        try:
            print(s.decode("ascii"))
        except:
            pass

if __name__ == "__main__":
    extract_strings(r"F:\Projects\cnk-law-website\public\CNK- COMPANY PROFILE (1).ppt")
