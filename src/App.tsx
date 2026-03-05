import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ChevronRight, 
  Play, 
  Award, 
  Globe, 
  FlaskConical, 
  Building2,
  Wine,
  ShieldCheck,
  History,
  Droplets,
  Sun,
  Sprout,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

const SectionHeader = ({ number, title, subTitle }: { number: string, title: string, subTitle: string }) => (
  <div className="relative mb-8 px-4">
    <div className="flex items-baseline gap-2">
      <span className="text-5xl font-bold text-zhen-blue/10 italic leading-none">{number}</span>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-zhen-blue tracking-wide">{title}</h2>
          <div className="h-[2px] w-10 bg-zhen-gold"></div>
        </div>
        <span className="text-[10px] text-zhen-gold uppercase tracking-[0.2em] font-bold">{subTitle}</span>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20 shadow-2xl overflow-x-hidden font-sans">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-zhen-blue rounded-full flex items-center justify-center text-white font-bold text-[10px]">珍</div>
          <span className="text-sm font-bold text-gray-800">贵州珍酒</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-zhen-gold font-bold">酒中珍品</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-zhen-gold rounded-full"></div>
            <div className="w-1 h-1 bg-zhen-gold rounded-full"></div>
            <div className="w-1 h-1 bg-zhen-gold rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Business Card Section */}
      <div className="p-4 bg-gradient-to-b from-white to-zhen-cream">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-6 card-shadow border border-zhen-gold/20 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-zhen-blue/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-zhen-gold/5 rounded-full -ml-16 -mb-16"></div>
          
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-zhen-blue rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-zhen-blue/20">珍</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-zhen-gold tracking-[0.3em] leading-none">GUIZHOU</span>
                  <span className="text-lg font-black text-zhen-blue tracking-tighter leading-none">ZHENJIU</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">珍酒品牌官</h1>
              <p className="text-sm text-zhen-gold font-bold mb-1">酱香名酒 · 易地茅台</p>
              <p className="text-[10px] text-gray-400">国家质量奖优质奖 / 港股白酒第一股</p>
            </div>
            <div className="text-right">
              <h2 className="text-sm font-bold text-zhen-blue leading-tight">贵州珍酒酿酒有限公司</h2>
              <p className="text-[8px] text-zhen-gold mt-1 uppercase tracking-widest font-black">Guizhou Zhenjiu Brewing Co., Ltd.</p>
            </div>
          </div>

          <div className="space-y-3 text-[11px] text-gray-700 relative z-10 font-medium">
            <div className="flex gap-4 items-center">
              <MapPin className="w-3 h-3 text-zhen-gold" />
              <span>贵州省遵义市汇川区珍酒路1号</span>
            </div>
            <div className="flex gap-4 items-center">
              <Phone className="w-3 h-3 text-zhen-gold" />
              <span className="text-gray-900 font-bold">400-XXXX-XXXX</span>
            </div>
            <div className="flex gap-4 items-center">
              <Globe className="w-3 h-3 text-zhen-gold" />
              <span>www.gzzjc.cn</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 px-4 mb-8">
        <button className="flex-1 py-3.5 bg-white border-2 border-zhen-blue text-zhen-blue rounded-xl text-sm font-black hover:bg-zhen-blue/5 transition-all active:scale-95">
          发送名片
        </button>
        <button className="flex-1 py-3.5 bg-zhen-blue text-white rounded-xl text-sm font-black shadow-xl shadow-zhen-blue/30 hover:bg-blue-900 transition-all active:scale-95">
          保存到通讯录
        </button>
      </div>

      {/* Quick Contact Icons */}
      <div className="flex justify-around px-6 mb-10">
        {[
          { icon: Phone, label: "拨打电话" },
          { icon: MessageSquare, label: "添加微信" },
          { icon: MapPin, label: "地址导航" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-zhen-cream flex items-center justify-center group-hover:bg-zhen-blue group-hover:text-white transition-all duration-300 border border-zhen-gold/20">
              <item.icon className="w-5 h-5 text-zhen-blue group-hover:text-white" />
            </div>
            <span className="text-[10px] font-bold text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="px-4 mb-12">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl group cursor-pointer border-4 border-white">
          <img 
            src="https://picsum.photos/seed/zhenjiu-brand/800/450" 
            alt="珍酒品牌视频" 
            className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zhen-blue/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-all shadow-2xl">
              <Play className="w-10 h-10 text-white fill-current ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white text-xs font-black tracking-widest">BRAND STORY</p>
            <p className="text-white/70 text-[10px]">珍酒品牌宣传片</p>
          </div>
        </div>
      </div>

      {/* Section 01: Brand History */}
      <section className="mb-16">
        <SectionHeader number="01" title="品牌历程" subTitle="BRAND HISTORY" />
        <div className="px-6 relative">
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-zhen-gold/20"></div>
          <div className="space-y-8">
            {[
              { year: "1975", text: "因一代伟人万吨优质酱酒夙愿，在遵义创办珍酒厂。" },
              { year: "1986", text: "根据“酒中珍品”题词定名珍酒。" },
              { year: "1988", text: "获国家质量奖优质奖，成为招待外国领导人宴会用酒。" },
              { year: "2023", text: "珍酒李渡集团在香港主板上市，成为港股白酒第一股。" },
              { year: "2025", text: "产能规模稳居贵州酒企前三，向世界一流酿酒企业迈进。" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start relative">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-zhen-blue z-10 mt-1 shadow-sm"></div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-zhen-blue leading-none mb-1">{item.year}</span>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: 1287 Process */}
      <section className="mb-16 bg-zhen-blue py-12 text-white">
        <div className="relative mb-10 px-4">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-white/10 italic leading-none">02</span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white tracking-wide">酿造工艺</h2>
                <div className="h-[2px] w-10 bg-zhen-gold"></div>
              </div>
              <span className="text-[10px] text-zhen-gold uppercase tracking-[0.2em] font-bold">1287 PROCESS</span>
            </div>
          </div>
        </div>
        
        <div className="px-6 mb-10">
          <p className="text-sm text-white/80 leading-relaxed mb-8 border-l-2 border-zhen-gold pl-4">
            贵州珍酒遵循“1287”传统酱香酿造工艺：1年生产周期，2次投料，8次发酵，7次取酒。
          </p>
          <div className="grid grid-cols-4 gap-4">
            {[
              { num: "1", label: "周期" },
              { num: "2", label: "投料" },
              { num: "8", label: "发酵" },
              { num: "7", label: "取酒" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-2xl font-black text-zhen-gold">{item.num}</span>
                <span className="text-[10px] font-bold text-white/60">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 px-4">
          {[
            { icon: Droplets, label: "优质水源", desc: "赤水河上游" },
            { icon: Sun, label: "适宜气候", desc: "汇川小气候" },
            { icon: Sprout, label: "特有原料", desc: "红缨子高粱" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 bg-white/10 rounded-2xl">
              <item.icon className="w-6 h-6 text-zhen-gold mb-2" />
              <span className="text-[11px] font-bold mb-1">{item.label}</span>
              <span className="text-[8px] text-white/50">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03: Product Center */}
      <section className="mb-16">
        <SectionHeader number="03" title="产品中心" subTitle="PRODUCT CENTER" />
        <div className="grid grid-cols-2 gap-4 px-4">
          {[
            { title: "大珍·珍酒", sub: "立于真实 点滴皆珍", img: "https://picsum.photos/seed/z-dz/400/500" },
            { title: "珍酒·珍三十", sub: "高端酱酒代表杰作", img: "https://picsum.photos/seed/z-30/400/500" },
            { title: "珍酒·珍十五", sub: "酱香名酒 时代经典", img: "https://picsum.photos/seed/z-15/400/500" },
            { title: "珍酒·江山印", sub: "成功由我定义", img: "https://picsum.photos/seed/z-jsy/400/500" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-xs font-black mb-0.5">{item.title}</h3>
                  <p className="text-white/60 text-[8px] truncate">{item.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-2.5 rounded-full border border-zhen-gold text-zhen-gold text-xs font-bold hover:bg-zhen-gold hover:text-white transition-all">
            查看更多产品
          </button>
        </div>
      </section>

      {/* Section 04: Honors */}
      <section className="mb-16 px-4">
        <SectionHeader number="04" title="品牌荣誉" subTitle="BRAND HONORS" />
        <div className="bg-zhen-cream rounded-3xl p-8 border border-zhen-gold/10">
          <div className="flex flex-col gap-6">
            {[
              { title: "省长质量奖提名奖", org: "贵州省政府" },
              { title: "国家质量奖优质奖", org: "国家质量奖评委会" },
              { title: "港股白酒第一股", org: "香港交易所" },
              { title: "年度创新企业案例", org: "央广财经" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zhen-gold/20">
                  <Award className="w-5 h-5 text-zhen-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">{item.title}</span>
                  <span className="text-[10px] text-zhen-gold font-bold uppercase tracking-wider">{item.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="px-4 mb-16">
        <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative">
          <div className="bg-gray-100 h-56 relative">
            <img 
              src="https://picsum.photos/seed/zunyi-location/800/400" 
              alt="遵义珍酒厂区" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zhen-blue/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-zhen-blue rounded-full flex items-center justify-center shadow-2xl animate-bounce border-2 border-white">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-xl border border-zhen-gold/20 whitespace-nowrap">
                  <span className="text-[10px] font-black text-zhen-blue">贵州珍酒酿酒有限公司</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-12 bg-zhen-cream">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-zhen-blue rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">珍</div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-black text-zhen-blue tracking-widest leading-none">ZHENJIU</span>
            <span className="text-[8px] font-bold text-zhen-gold tracking-[0.2em]">GUIZHOU CHINA</span>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 font-medium">© 2025 贵州珍酒酿酒有限公司 版权所有</p>
        <div className="mt-4 flex justify-center gap-4 text-[10px] font-bold text-zhen-gold/60">
          <span>隐私政策</span>
          <span>服务协议</span>
          <span>联系我们</span>
        </div>
      </div>
    </div>
  );
}
