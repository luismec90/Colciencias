class VideosController < ApplicationController
  def col
  end
 def ver
  @meses={"01"=>"Enero","02"=>"Febrero","03"=>"Marzo","04"=>"Abril","05"=>"Mayo","06"=>"Junio","07"=>"Julio","08"=>"Agosto","09"=>"Septiembre","10"=>"Octubre","11"=>"Noviembre","12"=>"Diciembre"}

  @fecha=params[:fecha].split("/")
  @mes=@meses[@fecha[1]]
  @ruta="public/videos/#{@mes}_#{@fecha[0]}/Camara_#{params[:camara]}/*"
  @files = Dir.glob(@ruta)
 end

 
end
