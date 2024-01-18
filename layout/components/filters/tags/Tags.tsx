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

  const totalItemCount = items.length;

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
              >
                <path
                  d="M9 1L3.5 6L1 3.72727"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All <span className="count">({totalItemCount})</span>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
              >
                <path
                  d="M9 1L3.5 6L1 3.72727"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {tag} <span className="count">({tagCounts[tag]})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
