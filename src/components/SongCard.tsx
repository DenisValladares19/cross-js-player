import styled from 'styled-components'

// * ==> Assets
import moreOptionsIcon from '@assets/icon/moreOptions-song.svg'

interface ISong {
    imgSong: string
    titleSong: string
    artistSong: string
    durationSong: string
    onClick: (song: any) => void
}

interface IProps {
    songs: ISong[]
}

const SongCard = (props: IProps) => {
    const { songs } = props

    return (
        <Wrapper>
            {(songs || []).map((song, i) => (
                <div className="contain" key={song.titleSong}>
                    <img src={song?.imgSong || ''} alt="imgSong" />
                    <div className="infoSong">
                        <h3> {song?.titleSong || ''} </h3>
                        <p> {song?.artistSong || ''} </p>
                    </div>

                    <div className="options">
                        <img
                            src={moreOptionsIcon}
                            alt="iconMoreOpt"
                            // onClick={song?.onClick && song?.onClick(song)}
                        />
                    </div>
                </div>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .contain {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        background-color: var(--secondary-color);
        padding: 5px;
        margin-bottom: 10px;

        img {
            width: 20%;
            height: 100%;
            border-radius: 5px;
            object-fit: scale-down;
        }
    }

    .infoSong {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: initial;
        padding: 10px;
        box-sizing: border-box;
        color: var(--font-color);

        h3 {
            font-size: 16px;
        }
        p {
            font-size: 12px;
        }
    }

    .options {
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        color: var(--font-color);
        cursor: pointer;

        img {
            width: 20px;
            height: 20px;
            object-fit: contain;
        }
    }
`
export default SongCard
