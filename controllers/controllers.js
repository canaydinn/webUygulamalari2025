const dbConn=require("../db/mysql_connect")
const kullanici_ekle=async (req,res)=>{
    const adSoyad=req.body.adSoyad
    const eposta=req.body.eposta
    const kullanici_sifre=req.body.kullanici_sifre
    const kullanici_yetki_id=req.body.kullanici_yetki_id
    const tarih=req.body.tarih
    dbConn.query("SELECT * FROM kullanicilar WHERE eposta=?",eposta,(error,results)=>{
        if(results.length>0){
            return res.status(201).json({
                success:false,
                data:res.body,
                message:"Kayıt Mevcut"
            })
        }else{
            dbConn.query("INSERT INTO kullanicilar (ad_soyad,eposta,kullanici_sifre,kullanici_yetki_id,tarih) VALUES (?,?,?,?,?)",[adSoyad,eposta,kullanici_sifre,kullanici_yetki_id,tarih],(error,results)=>{
                return res.status(201).json({
                    success:true,
                    data:res.body,
                    message:"Kayıt Gerçekleşti"
                })
            })
        }
    })
}
const login=async(req,res)=>{
    const eposta=req.body.eposta
    const kullanici_sifre=req.body.kullanici_sifre
    dbConn.query("SELECT * FROM kullanicilar WHERE eposta=? AND kullanici_sifre=?",[eposta,kullanici_sifre],(error,results)=>{
        if(results.length>0){
            return res.status(201).json({
                success:true,
                data:null,
                message:"Giriş Başarılı"
            })
        }else{
            return res.status(401).json({
                success:false,
                data:null,
                message:"Kullanıcı Adı veya Şifre Hatalı"
            })
        }
    })
}
module.exports={kullanici_ekle,login}