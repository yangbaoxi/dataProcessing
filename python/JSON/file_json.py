# 文件JSON 编码和解码
import json

with open('./demo.json', 'r+', encoding="utf-8") as demo:
    # 读取
    content = json.load(demo)
    print('读取：',content) # {'name': 'Tom', 'arr': [1, 2]}
    
    # 写入

    # json.dump(jsonData, demo)