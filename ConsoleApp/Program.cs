// Add System.Drawing as a reference.
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using static System.Net.Mime.MediaTypeNames;

namespace ImageResizeTest
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = @"F:\QUOC\Test\1155_image001-.png";
            //Resize(path, 600, 600);
            //Resize(path, 300, 300);
            //Resize(path, 150, 150);
            Resize(path, 270, 200);
            //Resize(path, 188, 188);
        }

        public static void Resize(string srcPath, int width, int height)
        {
            System.Drawing.Image image = System.Drawing.Image.FromFile(srcPath);
            Bitmap resultImage = Resize(image, width, height);
            resultImage.Save(srcPath.Replace(".png", "_" + width + "x" + height + ".png"));
        }

        //http://stackoverflow.com/questions/11137979/image-resizing-using-c-sharp
        public static Bitmap Resize(System.Drawing.Image image, int width, int height)
        {

            var destRect = new Rectangle(0, 0, width, height);
            var destImage = new Bitmap(width, height);

            destImage.SetResolution(image.HorizontalResolution, image.VerticalResolution);

            using (var graphics = Graphics.FromImage(destImage))
            {
                graphics.CompositingMode = CompositingMode.SourceCopy;
                graphics.CompositingQuality = CompositingQuality.HighQuality;
                graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                graphics.SmoothingMode = SmoothingMode.HighQuality;
                graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;

                using (var wrapMode = new ImageAttributes())
                {
                    wrapMode.SetWrapMode(WrapMode.TileFlipXY);
                    graphics.DrawImage(image, destRect, 0, 0, image.Width, image.Height, GraphicsUnit.Pixel, wrapMode);
                }
            }

            return destImage;
        }
    }
}