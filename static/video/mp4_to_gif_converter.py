import os
from moviepy import VideoFileClip

# 输入 MP4 文件夹路径
input_folder = "30"

# 输出 GIF 文件夹路径
output_folder = "gifs"

# 确保输出文件夹存在
os.makedirs(output_folder, exist_ok=True)

print(f"开始扫描文件夹: {input_folder}")

# 遍历文件夹中的所有 mp4 文件
converted_count = 0
for filename in os.listdir(input_folder):
    if filename.lower().endswith(".mp4"):
        mp4_path = os.path.join(input_folder, filename)
        gif_name = os.path.splitext(filename)[0] + ".gif"
        gif_path = os.path.join(output_folder, gif_name)
        
        print(f"正在转换: {filename} → {gif_name}")
        
        try:
            # 读取视频并保存为 gif
            clip = VideoFileClip(mp4_path)
            clip.write_gif(gif_path, fps=10)  # fps=10 控制流畅度，可调整
            clip.close()  # 释放资源
            converted_count += 1
            print(f"✓ 转换成功: {gif_name}")
        except Exception as e:
            print(f"✗ 转换失败: {filename} - 错误: {e}")

print(f"\n全部转换完成！共转换 {converted_count} 个文件，GIF 文件保存在: {output_folder}")