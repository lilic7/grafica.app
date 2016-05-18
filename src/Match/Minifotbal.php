<?php
namespace Match;

class Minifotbal extends AMatch{



    const __FOLDER__ = "D:/txt/fotbal/"; //W:/Grafica/__Fotbal__/txt
    const __EXT__ = ".txt";

    public $files;
    public $file_names = array(
        "score",
        "markator",
        "t1_gols",
        "t2_gols",
        "corners",
        "offside",
        "cartonas",
        "schimb"
    );

    private $teams = array();
    public function __construct(){
        $this->setFiles();
    }

    public function teamJsonFileEmpty(){
        $file = trim(file_get_contents(self::__FOLDER__."teams.json"));
        return empty($file);
    }

    public function setFiles(){
        foreach($this->file_names as $name){
            $this->files[$name] = self::__FOLDER__.$name.self::__EXT__;
        }
    }

    public function resetFiles()
    {
        foreach($this->files as $name => $path){
            $content = ($name == "score" || $name == "corners" || $name == "offside") ? "0 - 0" : "";
            file_put_contents($path, $content);
        }
        file_put_contents(self::__FOLDER__."teams.json", "");
    }

    public function setCorners($t1_corners, $t2_corners){
        $content = $t1_corners . " - " . $t2_corners;
        file_put_contents($this->files['corners'], $content);
    }

    public function offside($t1_offside, $t2_offside){
        $content = $t1_offside . " - " . $t2_offside;
        file_put_contents($this->files['offside'], $content);
    }

    public function gol(Player $player, $team, $minute, $score){
        file_put_contents($this->files['score'], $score);
        $this->setBottomScore($player->getName(), $team, $minute);
        file_put_contents($this->files['markator'], $player->getFullName());
    }

    function setBottomScore($name, $team, $minute){
        $team_file = $this->files[$team."_gols"];
        $content = file_get_contents($team_file);
        $newContent = $name . " " .$minute."'";
        if(strlen($content) > 0){
            $newContent .= "\r\n".$content;
        }
        file_put_contents($team_file, $newContent);
    }

    function getScore(){
        $score = file_get_contents($this->files['score']);
        $corners = file_get_contents($this->files['corners']);
        $offside = file_get_contents($this->files['offside']);
        $data =  array(
            'score'     => $score,
            'corners'   => $corners,
            'offside'   => $offside
        );
        return json_encode($data);
    }

    function prepareTeams($teams_data){
        $team_left = array(
            'title' => $teams_data['team_left_title'],
            'players' => $this->preparePlayers($teams_data['team_left_players']),
            'rezerve' => $this->preparePlayers($teams_data['team_left_rezerve'])
        );
        $team_right = array(
            "title" => $teams_data['team_right_title'],
            "players" => $this->preparePlayers($teams_data['team_right_players']),
            'rezerve' => $this->preparePlayers($teams_data['team_right_rezerve'])
        );
        $this->teams = array("team_left"=>$team_left, "team_right"=>$team_right);
        file_put_contents(self::__FOLDER__."teams.json", json_encode($this->teams));
    }

    function preparePlayers($players_string){
        $players = explode("\n", trim($players_string));
        asort($players, 1);
        $players_arr = array();
        $player = new Player();
        foreach($players as $p){
            $player_obj = $player->info($p);
            $arr = array(
                "name" => $player_obj->getName(),
                "num" => $player_obj->getNumber(),
                "fullName" => $player_obj->getFullName()
            );
            array_push($players_arr, $arr);
        }
        return $players_arr;
    }

    function readJsonData(){
        return file_get_contents(self::__FOLDER__."teams.json");
    }

    function changePlayers($player_in, $player_out, $team){
        $text = $player_in."\r\n".$player_out;
        file_put_contents($this->files['schimb'], $text);
        $content = file_get_contents(self::__FOLDER__."teams.json");
        $teams = json_decode($content, true);
        $team_side = ($team == 't1') ? 'team_left' : 'team_right';
        foreach($teams[$team_side]['players'] as $key => $player){
            if($player['fullName'] == $player_out){
                $players_pos = $key;
                break;
            }
        }
        foreach($teams[$team_side]['rezerve'] as $key => $rezerve){
            if($rezerve['fullName'] == $player_in){
                $rezerve_pos = $key;
                break;
            }
        }

        $temp = $teams[$team_side]['rezerve'][$rezerve_pos];
        $teams[$team_side]['rezerve'][$rezerve_pos] = $teams[$team_side]['players'][$players_pos];
        $teams[$team_side]['players'][$players_pos] = $temp;
        file_put_contents(self::__FOLDER__."teams.json", json_encode($teams));
        //return array("pos" => $, "player_out" => $player_out, "team" => $teams[$team_side]);
    }

    function cartonas($player){
        file_put_contents($this->files['cartonas'], $player);
    }
}