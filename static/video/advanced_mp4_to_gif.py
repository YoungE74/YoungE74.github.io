import os
from moviepy.editor import VideoFileClip

def convert_mp4_to_gif(input_folder=None, output_folder="gifs", fps=10, max_width=320):
    """
    将文件夹内的所有MP4文件转换为GIF
    
    参数:
    - input_folder: 输入文件夹路径，默认为当前目录
    - output_folder: 输出文件夹路径
    - fps: GIF帧率，默认10
    - max_width: GIF最大宽度，用于压缩文件大小
    """
    
    # 如果没有指定输入文件夹，使用当前目录
    if input_folder is None:
        input_folder = os.getcwd()
    
    # 确保输出文件夹存在
    os.makedirs(output_folder, exist_ok=True)
    
    print(f"开始扫描文件夹: {input_folder}")
    print(f"输出文件夹: {output_folder}")
    print(f"GIF设置: FPS={fps}, 最大宽度={max_width}px")
    print("-" * 50)
    
    # 获取所有mp4文件
    mp4_files = [f for f in os.listdir(input_folder) if f.lower().endswith('.mp4')]
    
    if not mp4_files:
        print("❌ 未找到任何MP4文件！")
        return
    
    print(f"找到 {len(mp4_files)} 个MP4文件:")
    for file in mp4_files:
        print(f"  - {file}")
    print("-" * 50)
    
    # 转换文件
    converted_count = 0
    failed_count = 0
    
    for i, filename in enumerate(mp4_files, 1):
        mp4_path = os.path.join(input_folder, filename)
        gif_name = os.path.splitext(filename)[0] + ".gif"
        gif_path = os.path.join(output_folder, gif_name)
        
        print(f"[{i}/{len(mp4_files)}] 正在转换: {filename}")
        
        try:
            # 读取视频
            clip = VideoFileClip(mp4_path)
            
            # 如果视频宽度大于max_width，则进行缩放
            if clip.w > max_width:
                clip = clip.resize(width=max_width)
            
            # 保存为GIF
            clip.write_gif(gif_path, fps=fps, verbose=False, logger=None)
            clip.close()  # 释放资源
            
            # 获取文件大小信息
            original_size = os.path.getsize(mp4_path) / 1024 / 1024  # MB
            gif_size = os.path.getsize(gif_path) / 1024 / 1024  # MB
            
            converted_count += 1
            print(f"  ✓ 转换成功: {gif_name} (原始: {original_size:.1f}MB → GIF: {gif_size:.1f}MB)")
            
        except Exception as e:
            failed_count += 1
            print(f"  ✗ 转换失败: {filename} - 错误: {e}")
    
    print("-" * 50)
    print(f"🎉 转换完成！")
    print(f"  成功: {converted_count} 个文件")
    print(f"  失败: {failed_count} 个文件")
    print(f"  GIF文件保存在: {os.path.abspath(output_folder)}")

# 主程序
if __name__ == "__main__":
    # 可以修改这些参数
    INPUT_FOLDER = None  # None表示使用当前目录，或者指定路径如 "e:/selfie/YoungE74.github.io/static/video"
    OUTPUT_FOLDER = "gifs"
    FPS = 10  # GIF帧率，数值越高越流畅但文件越大
    MAX_WIDTH = 320  # GIF最大宽度，用于压缩文件大小
    
    convert_mp4_to_gif(INPUT_FOLDER, OUTPUT_FOLDER, FPS, MAX_WIDTH)