export {removeMovie}from "../reducers/MovieSlice";
import axios from '../../utils/axios';
import {loadMovie} from "../reducers/MovieSlice";

export const asyncloadMovie = (id)=>async(dispatch,getState)=>{
    try{
        const detail = await axios.get(`/movie/${id}`)
        const externalid = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const videos = await axios.get(`/movie/${id}/videos`)
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`)
        console.log(watchproviders);
        let TheultimateDetails = {
            details: detail.data,
            externalids: externalid.data,
            recommendations : recommendations.data.results,
            similars : similar.data.results,
            videos : videos.data.results.find(m=>m.type==="Trailer"),
            watchprovider : watchproviders.data.results.CA,
        }
        
        dispatch(loadMovie(TheultimateDetails))
    }catch(error){
        console.log(error)
    }
}
