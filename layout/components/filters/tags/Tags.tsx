import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { debounce } from "lodash";
import "../Filters.scss";
import { useCallback, useEffect, useMemo, useState } from "react";

interface ITagsProps {
  onSelectTag: (tag: string) => void;
}

const Tags: React.FC<ITagsProps> = ({ onSelectTag }) => {
  const items = useSelector((state: RootState) => state.item.items);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  const tagCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    items.forEach((item) => {
      item.tags.forEach((tag: any) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, [items]);

  const debounceSearch = useCallback(
    debounce((search) => {
      const filtered = Object.keys(tagCounts).filter((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTags(filtered);
    }, 300),
    [tagCounts]
  );

  useEffect(() => {
    if (searchTerm) {
      debounceSearch(searchTerm);
    } else {
      setFilteredTags(Object.keys(tagCounts));
    }

    return () => {
      debounceSearch.cancel();
    };
  }, [searchTerm, debounceSearch, tagCounts]);

  return (
    <div className="tags-filter">
      <h4>Tags</h4>
      <div className="content">
        <input
          type="text"
          placeholder="Search tag"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="tags">
        {searchTerm === "" && (
          <label>
            <input
              type="radio"
              name="tag"
              value="all"
              onChange={() => onSelectTag("all")}
            />
            All
          </label>
        )}
          {filteredTags.map((tag) => (
            <label key={tag}>
              <input
                type="radio"
                name="tag"
                value={tag}
                onChange={() => onSelectTag(tag)}
              />
              {tag} ({tagCounts[tag]})
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
